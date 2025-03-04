class Data {

    async getAnswer(gok) {

        //#student-start
        
        const response = await fetch(`http://localhost:3000/getal?gok=${gok}`);
        const data = await response.json();
        return data;
        
        //#student-end

    }

}

export {Data};
