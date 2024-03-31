import axios from "axios";
export const demoFirst = async () => {
    console.log("CLIENT SIDE")
    try {
        const userData = {
            username: 'exampleuser',
            email: 'user@example.com'
        };

        const data = await axios.post('http://localhost:3000/demo/demoFirst', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        console.log("@@@@@@@@@",data)
        return data
    } catch (err) {
        console.log("Errrererre3re", err)
        return err
    }

}