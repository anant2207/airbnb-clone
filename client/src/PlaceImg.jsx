// import Image from "./Image.jsx";

export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <img className={className} src={'https://anant22-back.mdbgo.io/uploads/'+place.photos[0]} alt=""/>
  );
}

//src={place.photos[index]}