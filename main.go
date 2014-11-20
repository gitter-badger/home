package main

import (
	"github.com/go-martini/martini"
	render "github.com/martini-contrib/render"
)

func main() {
	m := martini.Classic()

	// public/ should contains compiled libraries using gulp or gruntjs project
	// where we are going to use js & css libraries to make our design the best
	// in the world.
	m.Use(martini.Static("public"))

	// templates/ folder to render erb like stuff.
	m.Use(render.Renderer(render.Options{
		Layout: "layout",
	}))

	m.Get("/", func(response render.Render) {
		response.HTML(200, "index", "something")
	})
	m.Run()
}
