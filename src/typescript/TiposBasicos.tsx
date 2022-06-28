import { Fragment } from "react";

export const TiposBasicos = () => {

    const name: string = 'Edgar';
    const age: number = 35;
    const isActive: boolean = true;

    return (
        <Fragment>
            <h3>Tipos Básicos</h3>
            {name} - {age} - {isActive ? 'Active' : 'Inactive'}
        </Fragment>
    )
}
