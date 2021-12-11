import {CO} from "./abstractFactory.interface";
import {Infantry} from "../product/infantry";
import {AndyInfantry} from "../product/andy.infantry";

export class Andy implements CO {
    makeInfantry(): Infantry {
        return new AndyInfantry();
    }
}
