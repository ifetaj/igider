
class User:
    def __init__(self, nom, id):
        self.nom = nom
        self.id = id

caissier = User("john", 1231)
print(caissier.nom)