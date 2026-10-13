const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    return `${this.name} is een auto van ${this.brand}.`;
  },
  isOld() {
    return this.year < 2010;
  },
  drive(km) {
    this.mileage += km;
    return this.mileage;
  },
};

// Toon de resultaten in de drie output-elementen
document.querySelector('#output-1').textContent = car.description();
document.querySelector('#output-2').textContent = car.isOld();
document.querySelector('#output-3').textContent = `${car.drive(100)} km`;
