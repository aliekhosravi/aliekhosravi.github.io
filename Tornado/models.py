import peewee

myDB = peewee.MySQLDatabase("negarkhaneh", host="localhost", port=3306, user="root", passwd="")

class MySQLModel(peewee.Model):
    """A base model that will use our MySQL database"""
    class Meta:
        database = myDB

class artalboms(MySQLModel) :
    id = peewee.PrimaryKeyField()
    image  = peewee.CharField()
    title = peewee.CharField()
    anchor = peewee.CharField()


class shairtext (MySQLModel) :
    id = peewee.PrimaryKeyField()
    image  = peewee.CharField()
    title = peewee.CharField()
    anchor = peewee.CharField()
    date = peewee.CharField()






myDB.connect()




if __name__ == "__main__":
    # myDB.connect()
    myDB.create_tables([artalboms,shairtext,])