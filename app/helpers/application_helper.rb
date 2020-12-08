# frozen_string_literal: true

module ApplicationHelper
  def show_svg(path)
    File.open("app/assets/images/#{path}", "rb") do |file|
      raw file.read
    end
  end

  TuistGraphColorPalette = ["#6236FF", "#A0E7E5", "#B4F8C8", "#FF8210", "#FBC858", "#BACC81"]
end
