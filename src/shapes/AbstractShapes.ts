
import p5 from 'p5'
import { Shape } from '~/interfaces'

export default abstract class Shapes {
  public isAnimationComplete: boolean = false
  protected abstract shapes: Shape[]

  constructor(protected readonly p5: p5) {}

  protected abstract generateShape(): void

  protected abstract renderShape(option: Shape): void

  protected abstract setAnimationCompleteStatus(shapes: Shape[]): void

  protected abstract updateShape(shapes: Shape[]): void

  public abstract renderShapes(): void
}
