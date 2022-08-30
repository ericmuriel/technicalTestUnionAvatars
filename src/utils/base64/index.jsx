export const convertToBase64 = (file) => {
    return new Promise((resolver, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolver(fileReader.result)
        };

        fileReader.onerror = (error) => {
            reject(error)
        };

    }
    )
}