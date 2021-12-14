const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, removeMovie, movieWatched, hiddenMessage} = require('../functions/movieTests')

beforeAll( async ()=>{
    await driver.get('http://localhost:63342/automation/movieList/index.html?_ijt=j69cvfeec42v05luipvkcji8qc')
})

afterAll(async ()=>{
    await driver.quit()
})

test("add a movie", async ()=>{
    await addMovie(driver)
    await driver.sleep(5000)
})

test("watched movie", async () =>{
    await movieWatched(driver)
    await driver.sleep(0)
})

test("hidden message shows up", async ()=>{
    await hiddenMessage(driver)
    await driver.sleep(2000)
})

test("remove movie", async ()=>{
    await removeMovie(driver)
    await driver.sleep(2000)
})



