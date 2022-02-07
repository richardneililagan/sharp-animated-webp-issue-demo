const path = require('path')
const sharp = require('sharp')

// :: ---

const _imagePath = path.resolve(__dirname, '..', 'assets', 'heart.webp')

const app = async () => {
  console.debug('Using image:', _imagePath)

  console.log('\nUsing .animated = false:')

  // :: Without animated
  const _sharpImage = sharp(_imagePath, { animated: false })
  try {
    await _sharpImage.metadata()
    console.debug('Metadata OK.')
  } catch (error) {
    console.error('Error:', error)
  }

  console.log('\nUsing .animated = true:')

  // :: With animated
  const _sharpImageAnimated = sharp(_imagePath, { animated: true })
  try {
    await _sharpImageAnimated.metadata()
    console.debug('Metadata OK.')
  } catch (error) {
    console.error('Error:', error)
  }
}

console.clear()
app()
