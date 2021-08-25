describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe('The Main Page', () => {
  it('The page loads successfully', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 + 2 equals 9', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.plus').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 9)

  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 - 2 equals 5', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.minus').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 5)

  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 * 2 equals 14', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.multiply').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 14)

  })
})


describe('Basic Operator Tests', () => {
  it('Should check 6 / 2 equals 3', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.six').click();
    cy.get('.divide').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 3)

  })
})

describe('Basic Operator Tests', () => {
  it('Should check 7 * 4 * 3 - 7 equals 77', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.multiply').click();
    cy.get('.four').click();
    cy.get('.multiply').click();
    cy.get('.three').click();
    cy.get('.minus').click();
    cy.get('.seven').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 77)

  })
})

describe('Basic Operator Tests', () => {
  it('Should check 73 + 2 equals 75', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.three').click();
    cy.get('.plus').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 75)

  })
})

describe('Basic Operator Tests', () => {
  it('Should check 73 - 2 equals 71', () => {
    // Arrange
    cy.visit('http://127.0.0.1:5500/index.html')
    // Act
    cy.get('.seven').click();
    cy.get('.three').click();
    cy.get('.minus').click();
    cy.get('.two').click();
    cy.get('.equals').click();
    // Assert
    cy.get(".calc__output").contains("div", 71)

  })
})