INSERT INTO Users (UserName, Email, PhoneNumber, PasswordHash, DateOfBirth, RegistrationDate, FirstName, LastName, City, Street, PostalCode, HouseNumber, IsVerifiedEmail, Salt) VALUES ('Test', 'Test@gmail.com', '821462155', 'FtLaz60bkEEw8NRm2eeZODjU8Do=', '1998-07-21', SYSDATETIME(), 'Test', 'Test', 'Unknown', 'Unknown', '21-186', '30A', 0, 'A18RkbAQ/aFkaoyRO/cGtQ==');

Select * FROM Users

INSERT INTO Coffees (Name,Description,Price) VALUES ('Latte', 'W�oski nap�j kawowy powstaj�cy w wyniku wlania podgrzanego mleka do kawy espresso.',100);
INSERT INTO Coffees (Name,Description,Price) VALUES ('Mocca', 'Jeden z wariant�w kawy latte. Sk�ada si� z espresso, gor�cego mleka oraz ciemnej lub mlecznej czekolady.',100);
INSERT INTO Coffees (Name,Description,Price) VALUES ('Americana', 'Czarna kawa powsta�a z po��czenia wody i espresso.',100);
INSERT INTO Coffees (Name,Description,Price) VALUES ('FlatWhite', 'Nap�j kawowy pochodz�cy z Austraill lub Nowej Zelandii. Jest przygotowywany poprzez zalanie jednej lub dw�ch porcji espresso spienionym mlekiem o jednorodnej, aksamitnej konsystencji.',100);
INSERT INTO Coffees (Name,Description,Price) VALUES ('Espresso', 'Wywodzi si� z W�och, gdzie w 1901 Luigi Bezzera stworzy� pierwszy ekspres do expresso. By� on jednak konstrukcj� opart� na przep�ywie pary i wody, co prowadzi�o do smakowych zmian ekstraktu.',100);
INSERT INTO Coffees (Name,Description,Price) VALUES ('YourOwn', 'Do it yourself.',100);

Select * FROM Coffees

INSERT INTO Orders (OrderDate, ClientId, City, Street, HouseNumber, PaymentMethod, IsPaymentCompleted, PostalCode, Latitude, Longitude, PaymentCard) VALUES (SYSDATETIME(), 'Test', 'Test', 'Test', '30A', 'blik', 0, '21-186', 0, 0, '**** **** **** 4242');
INSERT INTO Orders (OrderDate, ClientId, City, Street, HouseNumber, PaymentMethod, IsPaymentCompleted, PostalCode, Latitude, Longitude, PaymentCard) VALUES (SYSDATETIME(), 'Test', 'Test', 'Test', '30A', 'visa', 1, '21-186', 0, 0, '**** **** **** 4242');
INSERT INTO Orders (OrderDate, ClientId, City, Street, HouseNumber, PaymentMethod, IsPaymentCompleted, PostalCode, Latitude, Longitude, PaymentCard) VALUES (SYSDATETIME(), 'Test', 'Test', 'Test', '30A', 'visa', 0, '21-186', 0, 0, '**** **** **** 4242');
INSERT INTO Orders (OrderDate, ClientId, City, Street, HouseNumber, PaymentMethod, IsPaymentCompleted, PostalCode, Latitude, Longitude, PaymentCard) VALUES (SYSDATETIME(), 'Test', 'Test', 'Test', '30A', 'mastercard', 1, '21-186', 0, 0, '**** **** **** 4242');

Select * FROM Orders

INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('Latte', 1, 2, 0, 6, 10.99, 1);
INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('Latte', 1, 2, 0, 7, 11.50, 1);
INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('Mocca', 2, 4, 0, 6, 12.99, 3);
INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('Americana', 2, 4, 1, 7, 15.50, 3);
INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('YourOwn', 3, 4, 1, 7, 15.50, 3);
INSERT INTO OrderItems(CoffeeId, OrderId, EspressoCount, IsContainChocolate, MilkCount, Price, PaymentStatus) VALUES ('FlatWhite', 4, 4, 1, 7, 15.50, 3);

Select * FROM OrderItems

/*

DROP TABLE OrderItems
DROP TABLE Orders
DROP TABLE Users
DROP TABLE Coffees
DROP TABLE __EFMigrationsHistory

*/