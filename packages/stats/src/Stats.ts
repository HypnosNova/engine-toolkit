import { Script, Camera } from "@galacean/engine";
import Monitor from "./Monitor";

/**
 * Display engine status data such as FPS.
 */
export class Stats extends Script {
  private monitor: Monitor;

  override onBeginRender(camera: Camera): void {
    if (!this.monitor) {
      // @ts-ignore
      const gl = camera.engine._hardwareRenderer.gl;
      if (gl) {
        this.monitor = new Monitor(gl);
      }
    }
  }

  override onEndRender(camera: Camera): void {
    if (this.monitor) {
      this.monitor.update();
    }
  }
}
