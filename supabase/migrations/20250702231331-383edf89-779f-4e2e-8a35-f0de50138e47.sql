-- Simply add 'admin' as a valid user type to the profiles table
-- Remove any existing constraint and add a new one that includes admin
ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_user_type_check;

-- Add new constraint that includes admin
ALTER TABLE public.profiles ADD CONSTRAINT profiles_user_type_check 
CHECK (user_type IN ('developer', 'fund', 'originador', 'admin'));