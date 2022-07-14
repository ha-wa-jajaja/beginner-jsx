import React from "react";
import { Link } from "react-router-dom";

import ReduxGetter from "../components/adv/ReduxGetter";

const Adavnced = () => {
    return (
        <div className="page">
            <h2>Advanced</h2>
            <div>
                <h3>Router templates</h3>
                <ul>
                    <li>
                        <Link to="/adv/numberOne">number one </Link>
                    </li>
                    <li>
                        <Link to="/adv/numberTwo">number two </Link>
                    </li>
                </ul>
            </div>

            <ReduxGetter></ReduxGetter>
        </div>
    );
};

export default Adavnced;
