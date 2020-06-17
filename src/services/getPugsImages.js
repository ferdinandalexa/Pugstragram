async function getPugsImages(max)
{
    const API_URL = `https://dog.ceo/api/breed/pug/images/random/${max}} `;
    const response = await fetch(API_URL);
    const { message: data } = await response.json();
    return data;
}

export default getPugsImages;