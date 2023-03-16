package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type SimpleJson struct {
	name  string
	value int
}

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "*",
	}))

	app.Get("/mainData/*", func(c *fiber.Ctx) error {
		return c.JSON([]SimpleJson{
			{
				name:  "Og",
				value: 15,
			},
			{
				name:  "Oleeg",
				value: 14,
			},
			{
				name:  "Olg",
				value: 8,
			},
			{
				name:  "Oleg",
				value: 5,
			},
		})
	})
	log.Fatal(app.Listen("localhost:8053"))
}
