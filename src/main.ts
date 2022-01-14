import * as PIXI from 'pixi.js';
// import { sprites } from '../assets/sample.png'
import csvFileUrl from 'url:../assets/sample.png'

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

// Create the sprite and add it to the stage
let sprite = PIXI.Sprite.from(csvFileUrl);
app.stage.addChild(sprite);

// Add a ticker callback to move the sprite back and forth
let elapsed = 0.0;
app.ticker.add((delta: number) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
});