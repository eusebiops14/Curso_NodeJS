//Instalar node-fetch
import fetch from "node-fetch";

async function checaStatus(arrayURLs) {
    //promisses async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url);
        return res.status;
    }));
    return arrayStatus;
}


function geraArrayDeURLs(arrayLinks) {
    return arrayLinks
        .map(objetoLink => Object
        .values(objetoLink)
        .join());
}

export default async function validaURLs(arrayLinks) {
   const links = geraArrayDeURLs(arrayLinks);
   const statusLink = await checaStatus(links);
   return statusLink;
}