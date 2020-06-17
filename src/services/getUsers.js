async function getUsers(max = 1)
{
    const API_URL = `https://randomuser.me/api/?inc=name,login,picture,location&nat=es&results=${max}`;
    const response = await fetch(API_URL);
    const { results } = await response.json();
    const objs = results.map(user =>
    {
        return {
            username: user.login.username,
            name: { first: user.name.first, last: user.name.last },
            location: { city: user.location.city, state: user.location.state },
            picture: { medium: user.picture.medium },
        }
    })

    return objs;
}

export default getUsers;