

const openModal=(index)=>{
    console.log(index)
    var modal = document.getElementById(`myModal ${index}`);
    var img = document.getElementById(`img ${index}`);
    console.log(img)
    // btn.onclick = function() {
        modal.style.display = "block";
        modal.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img.src})`
    //   }
}
// https://www.laprairie.com/dw/image/v2/AAOT_PRD/on/demandware.static/-/Library-Sites-LaPrairieSharedLibrary/default/dwa650bf52/TheHouse/Timeline/TimelineEvent-2020_M.jpg?sw=768&sh=580&sm=cut
const hideModal=(index)=>{

    var modal = document.getElementById(`myModal ${index}`);
    modal.style.display = "none";
        // modal.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageUrl})`
}