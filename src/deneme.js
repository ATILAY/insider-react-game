detectAnyCollision() { 
    const halfWidth = this.spriteWidth / 2;
    const halfHeight = this.spriteHeight / 2;
    let rect1 = {x: this.state.playerX - halfWidth, y: this.state.playerY - halfHeight, 
        width: this.spriteWidth, height: this.spriteHeight}
    if (this.detectOutScreen(rect1)) {
        return true;
    }
    return this.obstacles.some(a => {
        var rect2 = {x: a.props.centreX - halfWidth, y: a.props.centreY - halfHeight, 
            width: this.spriteWidth, height: this.spriteHeight}
        if (this.detectCollision(rect1, rect2)) {
            return true;
        } else {
            return false;
        }
    });
}
detectCollision(rect1, rect2) {
if (rect1.x < rect2.x + rect2.width &&
rect1.x + rect1.width > rect2.x &&
rect1.y < rect2.y + rect2.height &&
rect1.y + rect1.height > rect2.y) {
    return true;
}
return false;
}
detectOutScreen(rect1) {
if (rect1.x < 0 || rect1.x + rect1.width > this.state.windowWidth
|| rect1.y < 0 || rect1.y + rect1.height > this.state.windowHeight) {
    return true;
}
return false;
}