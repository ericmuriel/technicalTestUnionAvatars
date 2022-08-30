import { useEffect, useState } from "react";
import { RenderInput } from "../../components/inputFile";
import { convertToBase64 } from "../base64";
import { CreateAvatar } from "../../services/CreateAvatar"
import { getBodies } from "../../services/GetBodies"

export const UploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    const avatar = await CreateAvatar(base64, '')

    return avatar

}
