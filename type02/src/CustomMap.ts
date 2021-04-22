
export interface Mappable{
    location: {
        lat: number
        lng: number
    }
    markerContent(): string
}

export class CustomMap {

    private googleMap: google.maps.Map;
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)  as HTMLElement,{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    } 
    


    addMarker(mappble: Mappable): void{
              // The marker, positioned at Uluru
        
        const marker = new google.maps.Marker({
            position: {
                lat: mappble.location.lat,
                lng: mappble.location.lng
            },
            map: this.googleMap
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappble.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }

}