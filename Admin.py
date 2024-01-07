
class Admin:
    def __init__(self, nom, id, username, passwd):
        self.nom=nom
        self.id=id
        self.username=username
        self.passwd=passwd

maro = Admin("Homard", 9999, "admin", "passwd")
print(maro.username)