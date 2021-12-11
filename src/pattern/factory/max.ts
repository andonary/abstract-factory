import {CO} from "./abstractFactory.interface";
import {Infantry} from "../product/infantry";
import {MaxInfantry} from "../product/max.infantry";

export class Max implements CO {
    makeInfantry(): Infantry {
        return new MaxInfantry();
    }
}
