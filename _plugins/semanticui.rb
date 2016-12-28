module Jekyll
  class RowElem < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @text = text
      @tokens = tokens
      @tag_name = tag_name
    end

    def render(context)
      if @text != "full "
        source = super.lines
        image = source[1]
        element = source[3..-1].join

        source = [image, element]
        content = [(Liquid::Template.parse source[0]).render, (Liquid::Template.parse source[1]).render]

        image = Kramdown::Document.new(content[0]).to_html
        element = Kramdown::Document.new(content[1]).to_html
        if @text == "reversed "
          "<div class='ui grid'><div class='eleven wide column'>#{element}</div><div class='four wide column'>#{image}</div></div>"
        else
          "<div class='ui grid'><div class='four wide column'>#{image}</div><div class='eleven wide column'>#{element}</div></div>"
        end
      else
        content = (Liquid::Template.parse super).render
        content = Kramdown::Document.new(content).to_html
        "<div class='ui grid'><div class='column'>#{content}</div></div>"
      end


    end
  end

  class Note < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<div class='ui icon message inverted'><i class='ui icon sticky note'></i><div class='content'>#{super}</div></div>"
    end
  end
end

Liquid::Template.register_tag('row', Jekyll::RowElem)
Liquid::Template.register_tag('note', Jekyll::Note)
