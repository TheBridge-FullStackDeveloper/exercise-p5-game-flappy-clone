        function moverBase() {
            baseGameX -= 1.5;
            if (baseGameX < -baseGame.width) {
                baseGameX = 0;
            }

            image(baseGame, baseGameX, 430);
            image(baseGame, baseGameX + baseGame.width, 430);
        }