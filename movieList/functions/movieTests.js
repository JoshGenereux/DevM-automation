const {By} = require('selenium-webdriver')

const addMovie = async (driver)=>{
    await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    await driver.findElement(By.xpath('//button')).click()
    const movie = await driver.findElement(By.xpath('//li'));
    const display = movie.isDisplayed()
    expect(display).toBeTruthy()
}

const removeMovie = async (driver) =>{
    await driver.findElement(By.xpath('//ul/li/button')).click()
}


const movieWatched =  async (driver) =>{
    await driver.findElement(By.xpath('//ul/li/span')).click()
}

const hiddenMessage = async (driver) =>{
    const message = driver.findElement(By.xpath('//aside'))
    const display = message.isDisplayed()
    expect(display).toBeTruthy()
}

module.exports = {
    addMovie,
    removeMovie,
    movieWatched,
    hiddenMessage
}