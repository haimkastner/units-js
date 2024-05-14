import { TwoByteIdGenerator } from '../../../../../id-generator';
import { HighLevelTsc, BinaryOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

/**
 * A node representing a modulus operation (`%`)
 *
 * @export
 * @class ModulusNode
 * @extends {BaseMathStringBuilderNode}
 */
export class ModulusNode extends BaseMathStringBuilderNode {
    public readonly isPrimitive: boolean = false;

    public constructor(
        idGenerator: TwoByteIdGenerator,
        private readonly _valueA: MathStringBuilderNode,
        private readonly _valueB: MathStringBuilderNode
    ) {
        super(idGenerator)
    }

    public execute(): ts.Statement[] {
        return HighLevelTsc.buildBinaryOperator(this.id, BinaryOperatorType.Mod, this._valueA, this._valueB);
    }
}
