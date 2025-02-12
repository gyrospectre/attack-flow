import { PageCommand } from "../PageCommand";
import { DiagramObjectModel, PositionSetByUser } from "@/assets/scripts/BlockDiagram";

export class UserSetObjectPosition extends PageCommand {

    /**
     * The object.
     */
    private _object: DiagramObjectModel;


    /**
     * Declares that an object's position was set by the user.
     * @param object
     *  The object.
     */
    constructor(object: DiagramObjectModel) {
        super(object.root.id);
        this._object = object;
    }
    

    /**
     * Executes the page command.
     * @returns
     *  True if the command should be recorded, false otherwise.
     */
    public execute(): boolean {
        this._object.setPositionSetByUser(PositionSetByUser.True);
        return true;
    }

    /**
     * Undoes the page command.
     */
    public undo() {
        this._object.setPositionSetByUser(PositionSetByUser.False);
    }

}
