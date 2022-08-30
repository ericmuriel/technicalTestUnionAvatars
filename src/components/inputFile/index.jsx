import { useState } from 'react';
import { UploadImage } from '../../utils/upload-image';
import RenderAvatar from '../render/index';
import CircularProgress from '@mui/material/CircularProgress';
import './styles.css'

const RenderInput = () => {
    const [importPhoto, setImportPhoto] = useState(false)
    const [urlAvatar, setUrlAvatar] = useState(null)

    const onChange = (e) => {
        setImportPhoto(true)
        UploadImage(e)
            .then(data => setUrlAvatar(data.avatar_link))
    }

    return (
        <>

            <input id="myInput" type="file" onChange={onChange} />
            <div>
                {!urlAvatar && importPhoto ?
                    <>
                        <div className='titles'>GENERATING YOUR AVATAR</div>
                        <div>{<CircularProgress />}</div>
                    </> : (urlAvatar ? <span className='titles'>AVATAR GENERATED</span> : <span className='titles'>PLEASE IMPORT YOUR PHOTO</span>)}
            </div>
            {urlAvatar && <RenderAvatar avatarUrl={urlAvatar} />}
        </>
    )
};

export default RenderInput