type Handle = () => Promise<string>

const fullname = 'Dư Thanh Được'

const handle: Handle = () => Promise.resolve(fullname)

handle().then((res) => console.log(res))
