const {Builder, By, Key, until} = require ('selenium-webdriver');
var should = require('chai').should();

describe('Happy flow', function(){

    it('Should go through the quiz', async function(){

        let browser = await new Builder().forBrowser('firefox').build()

        // Open home page
        await browser.get('https://staging.fitmomapp.com/')

        //Accept cookies
        await browser.findElement(By.xpath('//button[@data-testid="home__button-cookies"]')).click();

        //Has your body changed after pregnancy?
        await browser.findElement(By.xpath('//a[@id="home__secondary-button--header"]')).click()

        //What is your primary goal?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][3]')).click()

        //Do you suffer from back pain?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][1]')).click()

        //Back pain areas
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][1]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //What concerns have you faced after pregnancy?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][1]')).click()
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][4]')).click()
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][2]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        // Do you suffer from DIASTASIS RECTI ?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][2]')).click()

        //How often could you exercise?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][2]')).click()
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][4]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //You are not alone!
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //How much time has passed since the last childbirth?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][3]')).click()

        //How physically active you are
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][1]')).click()

        //Select your preferred workout type
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][1]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //How do you feel about exercising with your baby?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][2]')).click()

        //Are you currently breastfeeding?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][1]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //How much time do you usually have for meal preparation?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button"][4]')).click()

        //What foods is your breastfed baby sensitive to?
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][2]')).click()
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][4]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //Select foods you never eat
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][3]')).click()
        await browser.findElement(By.xpath('//div[@data-testid="quiz__option-button--multi"][2]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()
        await browser.findElement(By.xpath('//button[@id="quiz__continue-button"]')).click()

        //Age input
        await browser.findElement(By.xpath('//input[@id="quiz__input--age"]')).sendKeys('24', Key.ENTER)

        //Height
        await browser.findElement(By.xpath('//div[@id="quiz__tab--metric"]')).click()
        await browser.findElement(By.xpath('//input[@id="quiz__input--height"]')).sendKeys('176', Key.ENTER)

        //Weight
        await browser.findElement(By.xpath('//input[@id="quiz__input--weight"]')).sendKeys('87', Key.ENTER)

        //Desired weight 
        await browser.findElement(By.xpath('//input[@id="quiz__input--desired-weight"]')).sendKeys('77', Key.ENTER)

        // //Waiting for a new page
        // await browser.wait(until.elementLocated(By.xpath('//div[@class="Box-sc-rlt20n-0 FlexWrapper-sc-1262j39-0 kcpYkV eJikLP"]/button')), 15000)

        // //summary page
        // await browser.findElement(By.xpath('//div[@class="Box-sc-rlt20n-0 FlexWrapper-sc-1262j39-0 kcpYkV eJikLP"]/button')).click()

        // //email
        // await browser.findElement(By.xpath('//div[@class="Box-sc-rlt20n-0 jmzfFS"]/input')).sendKeys('qa+' + Date.now() + '@kilo.health')
    });

});