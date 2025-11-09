import { memo } from 'react';
const Buttoncomp = memo(({ name, handelClick }) => {
    console.log(name);
    return (
        <>
            <button onClick={handelClick}>{name}</button>
        </>
    );
});

export default Buttoncomp;
