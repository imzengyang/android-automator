import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

export async function runAdb(args: string[]): Promise<string> {
  const { stdout } = await execFileAsync('adb', args);
  return stdout.trim();
}

export async function getProp(prop: string): Promise<string> {
  return runAdb(['shell', 'getprop', prop]);
}

export async function getDeviceInfo(): Promise<{ model: string; version: string }> {
  const [model, version] = await Promise.all([
    getProp('ro.product.model'),
    getProp('ro.build.version.release')
  ]);
  return { model, version };
}
