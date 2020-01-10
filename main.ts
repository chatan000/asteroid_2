function hero () {
    Hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
. . . . 4 . . . . 4 . . . . . . 
. . . . 4 9 . . 9 4 . . . . . . 
. . . . 4 . . . . 4 . . . . . . 
. . . . 4 5 5 5 5 4 . . . . . . 
. . . . . 4 4 4 4 . . . . . . . 
4 4 . . . . 9 9 . . . . 4 4 . . 
. 4 4 4 4 4 9 9 4 4 4 4 4 . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . . 9 9 . . . . . . . . 
. . . . . 8 . . 8 . . . . . . . 
. . . . 8 8 . . 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Hero.setPosition(78, 97)
    controller.moveSprite(Hero, 100, 10)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . 8 8 8 8 8 8 8 . . . . . . 
. . . 8 . . . . . 8 8 . . . . . 
. . . 8 . 4 . . 4 . 8 . . . . . 
. . . 8 . . . . . . 8 . . . . . 
. . . 8 . . 4 4 4 4 8 . . . . . 
. . . 8 8 8 4 8 8 4 8 . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . 8 8 . . . 8 8 . . . . . 
. . . 8 8 . . . . . 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, 0)
}
function overlap () {
    game.over(false)
}
function score () {
    info.changeScoreBy(1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    overlap()
})
let projectile2: Sprite = null
let Hero: Sprite = null
hero()
music.baDing.play()
effects.bubbles.startScreenEffect()
game.onUpdateInterval(200, function () {
    projectile()
    score()
})
