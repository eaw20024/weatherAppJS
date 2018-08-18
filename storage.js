class Storage {
    constructor(){
        this.zipCode;
        this.defaultZipCode = '20002';
    }

    getLocationData() {
        if(localStorage.getItem('zipCode') === null){
            this.zipCode = this.defaultZipCode;
        } else {
            this.zipCode = localStorage.getItem('zipCode');
        }

        return {
            zipCode: this.zipCode
        }
    }

    setLocationData(zipCode){
        localStorage.setItem('zipCode', zipCode);
    }

}