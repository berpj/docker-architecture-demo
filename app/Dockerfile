FROM rails:onbuild

RUN bundle exec rake db:create
RUN bundle exec rake db:migrate

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
