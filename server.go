package main

import (
	"modules/routers"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()

	// Middleware Setting
	e.Use(middleware.Logger())
	e.Use(middleware.CORS())

	// REST Aai Init
	routers.Init(e)

	e.Logger.Fatal(e.Start(":8080"))
}
