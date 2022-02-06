
import p5 from 'p5'
import { ShapeInterface } from '~/interfaces'

export default abstract class Shapes {
  public isAnimationComplete: boolean = false
  protected abstract shapes: ShapeInterface[]

  constructor(protected readonly p5: p5) {}

  protected abstract generateShape(): void

  protected abstract renderShape(option: ShapeInterface): void

  protected abstract setAnimationCompleteStatus(shapes: ShapeInterface[]): void

  protected abstract updateShape(shapes: ShapeInterface[]): void

  public abstract renderShapes(): void
}
