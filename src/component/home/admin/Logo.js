import { useDispatch, useSelector } from 'react-redux';
import { configSelector } from '../../../redux/selectors';
import { useState } from 'react';
import { updateConfigApi } from '../../../redux/generalSlice';

export function Logo() {
    const dispatch = useDispatch();
    const config = useSelector(configSelector);
    const [selectedLogo, setSelectedLogo] = useState(config.logoIndex);

    function save() {

    }

    return <div id="search-setting" className="block">
        <div className="p-3">
            <div className="fs-1 fw-light border-bottom text-center fw-bold py-3 mb-3">Logo Setting</div>

        </div>
        <button
            className="btn btn-success ms-3"
            onClick={() => save()}
            disabled="false"
        >Save</button>
    </div>
}
