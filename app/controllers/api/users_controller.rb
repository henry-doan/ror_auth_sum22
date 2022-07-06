class Api::UsersController < ApplicationController
  before_action :authenticate_user!
  
  def update
    user = User.find(params[:id])
    user.first = params[:first] ? params[:first] : user.first
    user.last = params[:last] ? params[:last] : user.last
    
    file = params[:file]
    
    if file && file != ''
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
        if user.save
          render json: user
        else
          render json: { errors: user.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if user.save
        render json: user
      else
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end
  end

  
end
