import { expect, describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from './page'
import { beforeEach } from 'node:test'
 

describe("Page", () => {
  beforeEach(() => {
    render(<Page />)
  })

  it("should render the menu items correctly", () => {
    const home = screen.getByTestId('home-menu-item')
    const projects = screen.getByTestId('projects-menu-item')

    expect(home).toBeTruthy()
    expect(projects).toBeTruthy()
  })
})