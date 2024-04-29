import { MathStringBuilderNode } from '../math-string-builder-node';
import { HighLevelTsc, BinaryOperatorType } from '../../high-level-tsc';

export class MultiplicationNode implements MathStringBuilderNode {
	public readonly invokeRequired: boolean = true;

	public constructor(private _valueA: MathStringBuilderNode, private _valueB: MathStringBuilderNode) { }

	public execute(): string {
		return HighLevelTsc.buildBinaryOperatorCode(this._valueA, this._valueB, BinaryOperatorType.Mul);
	}
}