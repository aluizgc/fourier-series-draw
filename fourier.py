import pygame, sys



pygame.init()
pygame.display.set_caption("Série de Fourier")
screen = pygame.display.set_mode((800,800))


while True:
    # Controle Quit
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit(0)

    screen.fill((255,255,255))
    pygame.display.flip()
    a