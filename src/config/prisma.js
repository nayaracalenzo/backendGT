const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testConnection() {
    try {
      await prisma.$connect();
      console.log("Conexão com o banco estabelecida!");
    } catch (error) {
      console.error("Erro ao conectar:", error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  testConnection();

module.exports = prisma

