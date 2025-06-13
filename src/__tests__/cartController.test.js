const cartController = require("../controllers/cartController.js");
const prisma = require("../config/prisma.js");

describe("Controller - criar carrinho", () => {
  let user;

  beforeAll(async () => {
    user = await prisma.user.findUnique({
      where: { email: "queiroz.14@hotmail.com" },
    });
  });
  it("deve criar um carrinho com sucesso", async () => {
    const req = {
      user: { id: user.id },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await cartController.criarCarrinho(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Carrinho criado com sucesso",
    });

    const carrinho = await prisma.cart.findFirst({
      where: { user_id: user.id },
    });
    expect(carrinho).not.toBeNull();
  });
});
